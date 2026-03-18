package Travel.Itinerary;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Map;
import java.util.HashMap;

public class ItineraryService {
    private final Map<String, UserItinerary> repo = new HashMap<>(); //maps userId to their itinerary
    private final BudgetCalculation budgetCalculation;

    public ItineraryService(BudgetCalculation budgetCalculation) {
        this.budgetCalculation = budgetCalculation;
    }

    public Optional<UserItinerary> getItinerary(String userId) {
        // retrieves the current itinerary for a user
        return Optional.ofNullable(repo.get(userId));
    }

    public void addItem(String userId, ItineraryItem item) {
        UserItinerary it = repo.computeIfAbsent(userId, u -> new UserItinerary());
        it.addItem(item);
        budgetCalculation.handleItemchange(userId, item.getActivityId());
        

    }

    public void removeItem(String userId, String itineraryItemId) {
        // removes an item from the itinerary
        UserItinerary it = repo.get(userId);
        if(it != null){
            it.removeItem(itineraryItemId);
            budgetCalculation.handleItemchange(userId, itineraryItemId);
        }
    }

    public void updateSchedule(String userId, String itineraryItemId, LocalDateTime newTime) {
        // updates the schedule of an itinerary item
        UserItinerary it = repo.get(userId);
        if(it != null){ 
            it.updateItemSchedule(itineraryItemId, newTime);
            budgetCalculation.handleItemchange(userId, itineraryItemId);
        }
    }

    public List<ItineraryItem> listItems(String userId) {
        UserItinerary it = repo.get(userId);
        return it != null ? it.getItems() : List.of();
    }
}

// Minimal repository contract — implement in your persistence layer.
interface ItineraryRepository {
    Optional<UserItinerary> findByUserId(String userId);
    void save(UserItinerary itinerary);
    List<ItineraryItem> listItems(String userId);
    void createItineraryWithItem(String userId, ItineraryItem item);
}