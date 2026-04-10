package Travel;

public interface AuthObserver {
    void update(String eventType, AuthAccommodation.UserAccount user);
}