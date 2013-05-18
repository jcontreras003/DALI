require 'test_helper'

class AirplaneTest < ActiveSupport::TestCase
  def test_should_be_valid
    assert Airplane.new.valid?
  end
end
