package Travel.Activities;

import java.time.LocalDate;
import java.util.List;
import java.util.ArrayList;
import java.util.stream.Collectors;

public class ActivityListingService {

    private final List<Activity> activitiesDatabase = new ArrayList<>(); // This will act as our in-memory database for activities

    public ActivityListingService() {
        activitiesDatabase.add(new Activity("hike01", "Mountain Hike", "A scenic 5 mile trail", "Mountain", 15.00, "outdoor"));
        activitiesDatabase.add(new Activity("museum01", "Art Museum", "A world class art museum with exhibits from around the world", "NYC", 20.00, "indoor"));
        activitiesDatabase.add(new Activity("foodtour01", "Food Tour", "A guided tour of the best local food spots in the city", "Chicago", 25.00, "indoor"));
    }
    
    public List<Activity> listPopular(String destination, LocalDate date) {
        if (destination == null) return List.of();
        return activitiesDatabase.stream()
                .filter(activity -> activity.getLocation() != null
                        && activity.getLocation().equalsIgnoreCase(destination))
                .collect(Collectors.toList());
    }

    public List<Activity> filterActivities(String destination, LocalDate date, ActivityFilter filter) {
        if (destination == null) return List.of();
        return activitiesDatabase.stream()
                .filter(activity -> activity.getLocation() != null
                        && activity.getLocation().equalsIgnoreCase(destination))
                .filter(activity -> filter == null || filter.matches(activity))
                .collect(Collectors.toList());
    }
}
