package Travel.Activities;

public class Activity {
    private String id;
    private String name;
    private String description;
    private String location;
    private double cost;
    private String category;

    public Activity(String id, String name, String description, String location, double cost, String category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.location = location;
        this.cost = cost;
        this.category = category;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getLocation() {
        return location;
    }

    public double getCost() {
        return cost;
    }

    public String getCategory() {
        return category;
    }
}
