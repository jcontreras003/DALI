require 'test_helper'

class AirportTest < ActiveSupport::TestCase
  def test_should_be_valid
    assert Airport.new.valid?
  end
end
