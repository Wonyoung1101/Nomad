package Travel.Itinerary;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.ArrayList;
import java.math.BigDecimal;

public class UserItinerary {
    private String userId;
    private List<ItineraryItem> items;
    private BigDecimal totalBudget;
    private BigDecimal remainingBudget;

    public UserItinerary() {
        this.items = new ArrayList<>();
        this.totalBudget = BigDecimal.ZERO;
        this.remainingBudget = BigDecimal.ZERO;
    }
    public UserItinerary(String userId) {
        this.userId = userId;
        this.items = new ArrayList<>();
        this.totalBudget = BigDecimal.ZERO;
        this.remainingBudget = BigDecimal.ZERO;
    }

    public UserItinerary(String userId, BigDecimal totalBudget) {
        this.userId = userId;
        this.items = new ArrayList<>();
        this.totalBudget = totalBudget;
        this.remainingBudget = totalBudget;
    }

    public String getUserId() {
        return userId;
    }

    public List<ItineraryItem> getItems() {
        return items;
    }

        public BigDecimal getTotalBudget() {
        return totalBudget;
    }

    public BigDecimal getRemainingBudget() {
        return remainingBudget;
    }

    public void addItem(ItineraryItem item) {
        items.add(item);
    }

    public void removeItem(String itineraryItemId) {
        items.removeIf(item -> item.getActivityId().equals(itineraryItemId));
    }

    public void updateItemSchedule(String itineraryItemId, LocalDateTime newTime) {
        Optional<ItineraryItem> item = items.stream()
                .filter(i -> itineraryItemId.equals(i.getActivityId()))
                .findFirst();
        
        item.ifPresent(itineraryItem -> itineraryItem.setPreferredTime(newTime));
    }

    public Optional<ItineraryItem> findItem(String itineraryItemId) {
        return items.stream()
                .filter(item -> itineraryItemId.equals(item.getActivityId()))
                .findFirst();
    }

    private void recalculateRemainingBudget() {
        // Simple budget calculation - assumes $50 per item
        BigDecimal itemCost = BigDecimal.valueOf(50);
        BigDecimal totalSpent = itemCost.multiply(BigDecimal.valueOf(items.size()));
        this.remainingBudget = totalBudget.subtract(totalSpent);
    }

    @Override
    public String toString() {
        return "UserItinerary{" +
                "userId='" + userId + '\'' +
                ", itemsCount=" + items.size() +
                ", totalBudget=" + totalBudget +
                ", remainingBudget=" + remainingBudget +
                '}';
    }


}
