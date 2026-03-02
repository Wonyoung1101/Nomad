package Travel.Itinerary;

import java.math.BigDecimal;
import java.util.Optional;

public class BudgetCalculation {
    private final ItineraryRepository repo;

    public BudgetCalculation(ItineraryRepository repo) {
        this.repo = repo;
    }
    
    public Optional<BigDecimal> calculateRemainingBudget(String userId) {
        //calculates the remaining budget
        return repo.findByUserId(userId).map(itinerary -> itinerary.getRemainingBudget());
    }

    public void handleItemchange(String userId, String itineraryItemId) {
        //recalculates the budget when an item is added, removed, or updated
        Optional<BigDecimal> remaining = calculateRemainingBudget(userId);
        remaining.ifPresent(b ->{
            //persist budget snapshot, send notifications, update cache, etc.
        })
    }
}