require 'test_helper'

class ScheduledFlightTest < ActiveSupport::TestCase
  def test_should_be_valid
    assert ScheduledFlight.new.valid?
  end
end
