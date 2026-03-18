package Travel.Activities;

import java.time.LocalDateTime;
import java.util.*;

public class ActivitySelectionService {

    private final ActivityDetailService activityDetailService;

    // Store itineraries per user
    private final Map<String, List<ItineraryItem>> userItineraries = new HashMap<>();

    public ActivitySelectionService(ActivityDetailService activityDetailService) {
        this.activityDetailService = activityDetailService;
    }

    ItineraryItem addToItinerary(String userId, String activityId, LocalDateTime preferredTime,
            boolean autoSchedule) {
        // adds the activity to the user's itinerary
        Activity activity = activityDetailService.getActivityDetails(activityId);
        if (activity == null) {
            throw new IllegalArgumentException("No activity found for id: " + activityId);
        }

        LocalDateTime finalTime = preferredTime;

        // Simple auto-scheduling logic
        if (autoSchedule) {
            finalTime = autoAssignTime(userId, preferredTime);
        }

        ItineraryItem item = new ItineraryItem(userId, activityId, finalTime, autoSchedule);

        userItineraries.computeIfAbsent(userId, k -> new ArrayList<>()).add(item);
        return item;
    }

    private LocalDateTime autoAssignTime(String userId, LocalDateTime preferredTime) {
        // This is a very basic implementation of auto-scheduling logic. In a real
        // application, this would be much more complex and would take into account the
        // user's existing itinerary, the duration of the activity, and other factors.
        List<ItineraryItem> itinerary = userItineraries.getOrDefault(userId, new ArrayList<>());
        if (itinerary.isEmpty()) {
            return preferredTime;
        }

        // Find the latest end time in the current itinerary
        LocalDateTime latestEndTime = itinerary.stream()
                .map(item -> item.getPreferredTime().plusHours(2)) // Assuming each activity takes 2 hours
                .max(LocalDateTime::compareTo)
                .orElse(preferredTime);

        // Schedule the new activity after the latest end time
        return latestEndTime.isAfter(preferredTime) ? latestEndTime : preferredTime;
    }
}
