class Country < ActiveRecord::Base
  attr_accessible :name, :continent
  has_many :cities
end
