class Airport < ActiveRecord::Base
  attr_accessible :code, :name
  
  
  def self.get_all_airports
    Airport.all.collect{|x| [x.code+'-'+x.name, x.id]}
  end
end
