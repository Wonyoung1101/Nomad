package Travel.Itinerary;

import java.math.BigDecimal;
import java.util.Optional;

public class BudgetCalculation {
    private final Map<String, Itinerary> repo = new HashMap<>(); //maps userId to their itinerary

    public BudgetCalculation() {};
    
    public Optional<BigDecimal> calculateRemainingBudget(String userId) {
        //calculates the remaining budget
        return repo.get(userId) != null ? Optional.of(repo.get(userId).getRemainingBudget()) : Optional.empty();
    }

    public void handleItemchange(String userId, String itineraryItemId) {
        //recalculates the budget when an item is added, removed, or updated
        Optional<BigDecimal> remaining = calculateRemainingBudget(userId);
        remaining.ifPresent(b ->{
            //persist budget snapshot, send notifications, update cache, etc.
        })
    }
}