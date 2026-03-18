package Travel.Activities;

import java.time.LocalDateTime;

public class ItineraryItem {
    private String userId;
    private String activityId;
    private LocalDateTime preferredTime;
    boolean autoSchedule;

    public ItineraryItem(String userId, String activityId, LocalDateTime preferredTime, boolean autoSchedule) {
        this.userId = userId;
        this.activityId = activityId;
        this.preferredTime = preferredTime;
        this.autoSchedule = autoSchedule;
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
    
}
