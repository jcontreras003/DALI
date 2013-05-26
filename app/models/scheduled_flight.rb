class ScheduledFlight < ActiveRecord::Base
  attr_accessible :flight_id, :depature_date, :arrival_date, :available_seats, :closed_flight
end
