package Travel;

public interface AuthSubject {
    void addObserver(AuthObserver observer);
    void removeObserver(AuthObserver observer);
    void notifyObservers(String eventType, AuthAccommodation.UserAccount user);
}