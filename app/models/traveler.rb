class Traveler < ActiveRecord::Base
  attr_accessible :firts_name, :second_name, :id_document, :email, :phone, :residence_city_id
end
