package Travel;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.*;

/**
 * Wonyoung - Authentication + Accommodation modules (API stubs)
 * Purpose:
 *  - Auth: signUp/login/logout/session validation
 *  - Accommodation: search options, calculate exact costs, estimate when exact unavailable, add to itinerary
 */
public class AuthAccommodationation {

    /* =========================
       AUTHENTICATION MODULE (auth)
       ========================= */

    public static class UserAccount {
        public final String email;
        public final String password;
        public final String name;

        public UserAccount(String email, String password, String name) {
            this.email = email;
            this.password = password;
            this.name = name;
        }

        @Override
        public String toString() {
            return "UserAccount{email='" + email + "', name='" + name + "'}";
        }
    }

    public static class UserSession {
        public final String sessionId;
        public final String email;
        public final long createdAtEpochMs;

        public UserSession(String sessionId, String email) {
            this.sessionId = sessionId;
            this.email = email;
            this.createdAtEpochMs = System.currentTimeMillis();
        }

        @Override
        public String toString() {
            return "UserSession{sessionId='" + sessionId + "', email='" + email + "', createdAtEpochMs=" + createdAtEpochMs + "}";
        }
    }

    public static class AuthService {
        // In-memory storage
        private final Map<String, UserAccount> accountsByEmail = new HashMap<>();
        private final Map<String, UserSession> sessionsById = new HashMap<>();

        /**
         * UserSession login(String email, String password)
         * Authenticates the user and returns a session object.
         */
        public UserSession login(String email, String password) {
            requireNonBlank(email, "email");
            requireNonBlank(password, "password");

            String normalized = email.toLowerCase(Locale.ROOT);
            UserAccount account = accountsByEmail.get(normalized);

            if (account == null) {
                throw new IllegalArgumentException("No account found for email: " + email);
            }
            if (!account.password.equals(password)) {
                throw new IllegalArgumentException("Invalid password for email: " + email);
            }

            String sessionId = UUID.randomUUID().toString();
            UserSession session = new UserSession(sessionId, account.email);
            sessionsById.put(sessionId, session);
            return session;
        }

        /**
         * UserAccount signUp(String email, String password, String name)
         * Creates a new user account after validating input.
         *
         * Business rules:
         *  - emails must be unique
         *  - passwords must meet security requirements
         */
        public UserAccount signUp(String email, String password, String name) {
            requireNonBlank(email, "email");
            requireNonBlank(password, "password");
            requireNonBlank(name, "name");

            String normalized = email.toLowerCase(Locale.ROOT);
            if (accountsByEmail.containsKey(normalized)) {
                throw new IllegalArgumentException("Email already exists: " + email);
            }

            // simple security requirement (stub)
            if (password.length() < 8) {
                throw new IllegalArgumentException("Password must be at least 8 characters.");
            }
            if (!containsLetter(password) || !containsDigit(password)) {
                throw new IllegalArgumentException("Password must include at least one letter and one number.");
            }

            UserAccount account = new UserAccount(normalized, password, name);
            accountsByEmail.put(normalized, account);
            return account;
        }

        /**
         * void logout(String sessionId)
         * Terminates the active session.
         */
        public void logout(String sessionId) {
            requireNonBlank(sessionId, "sessionId");
            sessionsById.remove(sessionId);
        }

        /**
         * boolean isAuthenticated(String sessionId)
         * Checks whether a session is valid.
         */
        public boolean isAuthenticated(String sessionId) {
            if (sessionId == null || sessionId.isBlank()) return false;
            return sessionsById.containsKey(sessionId);
        }

        // helpers
        private static void requireNonBlank(String s, String field) {
            if (s == null || s.isBlank()) {
                throw new IllegalArgumentException(field + " must not be blank.");
            }
        }

        private static boolean containsLetter(String s) {
            for (char c : s.toCharArray()) if (Character.isLetter(c)) return true;
            return false;
        }

        private static boolean containsDigit(String s) {
            for (char c : s.toCharArray()) if (Character.isDigit(c)) return true;
            return false;
        }
    }


    /* =========================
       ACCOMMODATION MODULE (accommodation)
       ========================= */

    public enum LodgingType {
        HOTEL, HOSTEL, AIRBNB, MOTEL
    }

    public static class DateRange {
        public final LocalDate start;
        public final LocalDate end;

        public DateRange(LocalDate start, LocalDate end) {
            if (start == null || end == null) {
                throw new IllegalArgumentException("DateRange start/end cannot be null.");
            }
            if (!end.isAfter(start)) {
                throw new IllegalArgumentException("DateRange end must be after start.");
            }
            this.start = start;
            this.end = end;
        }

        public long nights() {
            return ChronoUnit.DAYS.between(start, end);
        }

        @Override
        public String toString() {
            return start + " to " + end;
        }
    }

    public static class AccommodationOption {
        public final String id;
        public final String destination;
        public final LodgingType lodgingType;
        public final double nightlyRate;

        public AccommodationOption(String id, String destination, LodgingType lodgingType, double nightlyRate) {
            this.id = id;
            this.destination = destination;
            this.lodgingType = lodgingType;
            this.nightlyRate = nightlyRate;
        }

        @Override
        public String toString() {
            return lodgingType + " @ " + destination + " ($" + nightlyRate + "/night)";
        }
    }

    public static class CostBreakdown {
        public final double baseCost;
        public final double taxes;
        public final double mandatoryFees;
        public final double total;

        public CostBreakdown(double baseCost, double taxes, double mandatoryFees) {
            this.baseCost = round2(baseCost);
            this.taxes = round2(taxes);
            this.mandatoryFees = round2(mandatoryFees);
            this.total = round2(this.baseCost + this.taxes + this.mandatoryFees);
        }

        private static double round2(double v) {
            return Math.round(v * 100.0) / 100.0;
        }

        @Override
        public String toString() {
            return "CostBreakdown{base=" + baseCost + ", taxes=" + taxes + ", fees=" + mandatoryFees + ", total=" + total + "}";
        }
    }

    public static class CostEstimateResult {
        public final double estimatedTotal;
        public final boolean isEstimated; // label must be true if exact unavailable
        public final String note;

        public CostEstimateResult(double estimatedTotal, boolean isEstimated, String note) {
            this.estimatedTotal = Math.round(estimatedTotal * 100.0) / 100.0;
            this.isEstimated = isEstimated;
            this.note = note;
        }

        @Override
        public String toString() {
            return "CostEstimateResult{estimatedTotal=" + estimatedTotal + ", isEstimated=" + isEstimated + ", note='" + note + "'}";
        }
    }

    public static class ItineraryItem {
        public final String userId;
        public final AccommodationOption accommodation;
        public final DateRange dates;
        public final int guests;

        public ItineraryItem(String userId, AccommodationOption accommodation, DateRange dates, int guests) {
            this.userId = userId;
            this.accommodation = accommodation;
            this.dates = dates;
            this.guests = guests;
        }

        @Override
        public String toString() {
            return "ItineraryItem{userId=" + userId + ", accommodation=" + accommodation + ", dates=" + dates + ", guests=" + guests + "}";
        }
    }

    public static class AccommodationSearchService {
        private final List<AccommodationOption> catalog = new ArrayList<>();

        public AccommodationSearchService() {
            catalog.add(new AccommodationOption("A1", "Tokyo", LodgingType.HOTEL, 140.0));
            catalog.add(new AccommodationOption("A2", "Tokyo", LodgingType.HOSTEL, 45.0));
            catalog.add(new AccommodationOption("A3", "Seoul", LodgingType.AIRBNB, 95.0));
            catalog.add(new AccommodationOption("A4", "New York", LodgingType.HOTEL, 220.0));
            catalog.add(new AccommodationOption("A5", "New York", LodgingType.MOTEL, 110.0));
        }

        /**
         * List<AccommodationOption> search(String destination, DateRange dates, int guests, LodgingType type)
         * Returns available accommodations matching user criteria.
         */
        public List<AccommodationOption> search(String destination, DateRange dates, int guests, LodgingType type) {
            requireNonBlank(destination, "destination");
            if (dates == null) throw new IllegalArgumentException("dates cannot be null");
            if (guests <= 0) throw new IllegalArgumentException("guests must be >= 1");
            if (type == null) throw new IllegalArgumentException("type cannot be null");

            List<AccommodationOption> results = new ArrayList<>();
            for (AccommodationOption opt : catalog) {
                if (opt.destination.equalsIgnoreCase(destination) && opt.lodgingType == type) {
                    results.add(opt);
                }
            }
            // stub: always available (no inventory check)
            return results;
        }

        private static void requireNonBlank(String s, String field) {
            if (s == null || s.isBlank()) throw new IllegalArgumentException(field + " must not be blank.");
        }
    }

    public static class AccommodationCostEstimator {
        private static final double TAX_RATE = 0.10;               // 10%
        private static final double MANDATORY_FEE_PER_STAY = 25.0; // fixed per stay

        /**
         * CostBreakdown calculateExactTotal(AccommodationOption option, DateRange dates, int guests)
         * Computes total cost including nightly rates, taxes, and mandatory fees.
         *
         * Business rule: exact costs must include all mandatory charges
         */
        public CostBreakdown calculateExactTotal(AccommodationOption option, DateRange dates, int guests) {
            if (option == null) throw new IllegalArgumentException("option cannot be null");
            if (dates == null) throw new IllegalArgumentException("dates cannot be null");
            if (guests <= 0) throw new IllegalArgumentException("guests must be >= 1");

            double nights = dates.nights();
            double base = option.nightlyRate * nights;

            // guest scaling: +15% per extra guest beyond 1
            double guestMultiplier = 1.0 + (Math.max(0, guests - 1) * 0.15);
            base *= guestMultiplier;

            double taxes = base * TAX_RATE;
            double fees = MANDATORY_FEE_PER_STAY;

            return new CostBreakdown(base, taxes, fees);
        }

        /**
         * CostEstimateResult estimateIfExactUnavailable(AccommodationOption option, DateRange dates, int guests)
         * Business rule: if exact pricing unavailable, must be labeled "Estimated"
         */
        public CostEstimateResult estimateIfExactUnavailable(AccommodationOption option, DateRange dates, int guests) {
            if (option == null) throw new IllegalArgumentException("option cannot be null");
            if (dates == null) throw new IllegalArgumentException("dates cannot be null");
            if (guests <= 0) throw new IllegalArgumentException("guests must be >= 1");

            // stub rule: nightlyRate <= 0 means we cannot confirm exact pricing
            if (option.nightlyRate <= 0) {
                double estimated = 100.0 * dates.nights();
                return new CostEstimateResult(estimated, true, "Estimated because exact pricing unavailable.");
            }

            CostBreakdown exact = calculateExactTotal(option, dates, guests);
            return new CostEstimateResult(exact.total, false, "Exact pricing available.");
        }
    }

    public static class AccommodationSelectionService {
        private final Map<String, List<ItineraryItem>> itineraryByUser = new HashMap<>();

        /**
         * ItineraryItem addToItinerary(String userId, AccommodationOption option, DateRange dates, int guests)
         * Business rule: budget must be updated immediately after selection (stub: store immediately)
         */
        public ItineraryItem addToItinerary(String userId, AccommodationOption option, DateRange dates, int guests) {
            requireNonBlank(userId, "userId");
            if (option == null) throw new IllegalArgumentException("option cannot be null");
            if (dates == null) throw new IllegalArgumentException("dates cannot be null");
            if (guests <= 0) throw new IllegalArgumentException("guests must be >= 1");

            ItineraryItem item = new ItineraryItem(userId, option, dates, guests);
            itineraryByUser.computeIfAbsent(userId, k -> new ArrayList<>()).add(item);
            return item;
        }

        public List<ItineraryItem> getItinerary(String userId) {
            requireNonBlank(userId, "userId");
            return itineraryByUser.getOrDefault(userId, Collections.emptyList());
        }

        private static void requireNonBlank(String s, String field) {
            if (s == null || s.isBlank()) throw new IllegalArgumentException(field + " must not be blank.");
        }
    }
}
