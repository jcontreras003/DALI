require 'test_helper'

class FlightTicketTest < ActiveSupport::TestCase
  def test_should_be_valid
    assert FlightTicket.new.valid?
  end
end
