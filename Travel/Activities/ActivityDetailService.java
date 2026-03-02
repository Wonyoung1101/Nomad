package Travel.Activities;

import java.util.Map;
import java.util.HashMap;

public class ActivityDetailService {
    private final Map<String, Activity> activityDatabase = new HashMap<>(); // This will act as our in-memory database for activities

    public ActivityDetailService() {
        activitiesDatabase.put("hike01", new Activity("hike01", "Mountain Hike", "A sceneic 5 mile trail"));
        activitiesDatabase.put("museum01", new Activity("museum01", "Art Museum", "A world class art museum with exhibits from around the world"));
    }
    
    public Activity getActivityDetails(String activityId) {
        //returns details of an activity given its id
        return activityDatabase.get(activityId); // In a real implementation, this would make an HTTP request to the backend to fetch activity details

    }
}