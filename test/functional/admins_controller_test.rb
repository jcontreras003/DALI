require 'test_helper'

class AdminsControllerTest < ActionController::TestCase
  def test_index
    get :index
    assert_template 'index'
  end
end
