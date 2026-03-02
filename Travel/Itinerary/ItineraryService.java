package Travel.Itinerary;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public class ItineraryService {
    private final Map<String, Itinerary> repo = new HashMap<>(); //maps userId to their itinerary
    private final BudgetCalculation budgetCalculation;

    public ItineraryService(BudgetCalculation budgetCalculation) {
        this.budgetCalculation = budgetCalculation;
    }

    public Optional<Itinerary> getItinerary(String userId) {
        // retrieves the current itinerary for a user
        return Optional.ofNullable(repo.get(userId));
    }

    public void addItem(String userId, ItineraryItem item) {
        itinerary it = repo.computeIfAbsent(userId, u -> new Itinerary());
        it.addItem(item);
        budgetCalculation.handleItemchange(userId, item.getId());
        

    }

    public void removeItem(String userId, String itineraryItemId) {
        // removes an item from the itinerary
        Itinerary it = repo.get(userId);
        if(it != null){
            it.removeItem(itineraryItemId);
            budgetCalculation.handleItemchange(userId, itineraryItemId);
        }
    }

    public void updateSchedule(String userId, String itineraryItemId, LocalDateTime newTime) {
        // updates the schedule of an itinerary item
        Itinerary it = repo.get(userId);
        if(it != null){ 
            it.updateItemSchedule(itineraryItemId, newTime);
            budgetCalculation.handleItemchange(userId, itineraryItemId);
        }
    }

    public List<ItineraryItem> listItems(String userId) {
        Itinerary it = repo.get(userId);
        return it != null ? it.getItems() : List.of();
    }
}

// Minimal repository contract — implement in your persistence layer.
interface ItineraryRepository {
    Optional<Itinerary> findByUserId(String userId);
    void save(Itinerary itinerary);
    List<ItineraryItem> listItems(String userId);
    void createItineraryWithItem(String userId, ItineraryItem item);
}