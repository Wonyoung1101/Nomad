package Travel.Community;

public class BusinessForm {
    private String name;
    private String destination;

    public BusinessForm(String name, String destination) {
        this.name = name;
        this.destination = destination;
    }

    public String getName(){
        return name;
    }
    public String getDestination() {
        return destination;
    }
}
