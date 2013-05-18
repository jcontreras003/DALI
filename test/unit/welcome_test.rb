require 'test_helper'

class WelcomeTest < ActiveSupport::TestCase
  def test_should_be_valid
    assert Welcome.new.valid?
  end
end
