package Travel.Community;

public class Business {
    private String businessId;
    private String name;
    private String destination;

    public Business(String businessId, String name, String destination) {
        this.businessId = businessId;
        this.name = name;
        this.destination = destination;
    }

    public String getBusinessId() {
        return businessId;
    }
    public String getName() {
        return name;
    }
    public String getDestination(){
        return destination;
    }

}
