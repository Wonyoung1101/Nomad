# IST412Travel_application
Observer Pattern Implementation

Team Member Name: Wonyoung Park

Design Pattern Implemented:
Observer Pattern

Classes / Interfaces Implementing the Pattern:
- AuthObserver.java
- AuthSubject.java
- SessionObserver.java
- AuditObserver.java
- NotificationObserver.java
- AuthObserverTest.java

Description:
The Observer pattern was implemented for the authentication module. 
When a user signs up, logs in, or logs out, the AuthSubject notifies all registered observers.
SessionObserver tracks session activity, AuditObserver records authentication events, and NotificationObserver handles user notifications.
This design keeps the authentication system flexible and allows new observer classes to be added without changing the core authentication logic.