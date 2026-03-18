package Travel.Activities;

public class ActivityFilter {
    private String setBudget;
    private String descriptionKeyword;
    private String activityType;

    // Constructor for creating a filter with no criteria
    public ActivityFilter() {
    }

    // Constructor for filtering by user's budget
    public ActivityFilter(String setBudget) {
        this.setBudget = setBudget;
    }

    // Constructor for filtering by user's budget and description keywords
    public ActivityFilter(String setBudget, String descriptionKeyword) {
        this.setBudget = setBudget;
        this.descriptionKeyword = descriptionKeyword;
    }

    // Constructor for filtering by user's budget, description, and type
    public ActivityFilter(String setBudget, String descriptionKeyword, String activityType) {
        this.setBudget = setBudget;
        this.descriptionKeyword = descriptionKeyword;
        this.activityType = activityType;
    }

    // Setters
    public void setSetBudget(String setBudget) {
        this.setBudget = setBudget;
    }

    public void setDescriptionKeyword(String descriptionKeyword) {
        this.descriptionKeyword = descriptionKeyword;
    }

    public void setActivityType(String activityType) {
        this.activityType = activityType;
    }

    // Getters
    public String getSetBudget() {
        return setBudget;
    }

    public String getDescriptionKeyword() {
        return descriptionKeyword;
    }

    public String getActivityType() {
        return activityType;
    }

    // Core method for matching activities against filter criteria
    public boolean matches(Activity activity) {
        if (activity == null) {
            return false;
        }

        // Check budget match
        if (setBudget != null && !setBudget.trim().isEmpty()) {
            if (activity.getName() == null ||
                    !activity.getName().toLowerCase().contains(setBudget.toLowerCase())) {
                return false;
            }
        }

        // Check description keyword match
        if (descriptionKeyword != null && !descriptionKeyword.trim().isEmpty()) {
            if (activity.getDescription() == null ||
                    !activity.getDescription().toLowerCase().contains(descriptionKeyword.toLowerCase())) {
                return false;
            }
        }

        // Check activity type match (matches against location as a proxy for type)
        if (activityType != null && !activityType.trim().isEmpty()) {
            if (activity.getLocation() == null ||
                    !activity.getLocation().equalsIgnoreCase(activityType)) {
                return false;
            }
        }

        return true;
    }

    @Override
    public String toString() {
        return "ActivityFilter{" +
                "setBudget='" + setBudget + '\'' +
                ", descriptionKeyword='" + descriptionKeyword + '\'' +
                ", activityType='" + activityType + '\'' +
                '}';
    }
}
