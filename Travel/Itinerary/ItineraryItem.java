package Travel.Itinerary;

import java.time.LocalDateTime;

public class ItineraryItem {
    private String id;
    private String userId;
    private String activityId;
    private LocalDateTime preferredTime;
    private boolean autoSchedule;

    public ItineraryItem(String id, String userId, String activityId, LocalDateTime preferredTime,
            boolean autoSchedule) {
        this.id = id;
        this.userId = userId;
        this.activityId = activityId;
        this.preferredTime = preferredTime;
        this.autoSchedule = autoSchedule;
    }

    public String getId() {
        return id;
    }

    public String getUserId() {
        return userId;
    }

    public String getActivityId() {
        return activityId;
    }

    public LocalDateTime getPreferredTime() {
        return preferredTime;
    }

    public boolean isAutoSchedule() {
        return autoSchedule;
    }

    public void setPreferredTime(LocalDateTime newTime) {
        this.preferredTime = newTime;
    }

    @Override
    public String toString() {
        return "ItineraryItem{" +
                "id='" + id + '\'' +
                ", userId='" + userId + '\'' +
                ", activityId='" + activityId + '\'' +
                ", preferredTime=" + preferredTime +
                ", autoSchedule=" + autoSchedule +
                '}';
    }
}