package Travel.Itinerary;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public class ItineraryService {
    private final ItineraryRepository repository;
    private final BudgetCalculation budgetCalculation;

    public ItineraryService(ItineraryRepository repository, BudgetCalculation budgetCalculation) {
        this.repository = repository;
        this.budgetCalculation = budgetCalculation;
    }

    public Optional<Itinerary> getItinerary(String userId) {
        // retrieves the current itinerary for a user
        return repository.findByUserId(userId);
    }

    public void addItem(String userId, ItineraryItem item) {
        repository.findByUserId(userId).ifPresentOrElse(itinerary -> {
            itinerary.addItem(item);
            repository.save(itinerary);
            budgetCalculation.handleItemchange(userId, item.getId());
        }, () -> {
            repository.createItineraryWithItem(userId, item);
            budgetCalculation.handleItemchange(userId, item.getId());
        });
        

    }

    public void removeItem(String userId, String itineraryItemId) {
        // removes an item from the itinerary
        repository.findByUserId(userId).ifPresent(itinerary -> {
            itinerary.removeItem(itineraryItemId);
            repository.save(itinerary);
            budgetCalculation.handleItemchange(userId, itineraryItemId);
        });
    }

    public void updateSchedule(String userId, String itineraryItemId, LocalDateTime newTime) {
        // updates the schedule of an itinerary item
        repository.findByUserId(userId).ifPresent(itinerary -> {
            itinerary.updateItemSchedule(itineraryItemId, newTime);
            repository.save(itinerary);
            budgetCalculation.handleItemchange(userId, itineraryItemId);
        });
    }

    public List<ItineraryItem> listItems(String userId) {
        return repository.listItems(userId);
    }
}

// Minimal repository contract — implement in your persistence layer.
interface ItineraryRepository {
    Optional<Itinerary> findByUserId(String userId);
    void save(Itinerary itinerary);
    List<ItineraryItem> listItems(String userId);
    void createItineraryWithItem(String userId, ItineraryItem item);
}