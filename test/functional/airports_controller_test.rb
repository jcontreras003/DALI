require 'test_helper'

class AirportsControllerTest < ActionController::TestCase
  def test_index
    get :index
    assert_template 'index'
  end

  def test_show
    get :show, :id => Airport.first
    assert_template 'show'
  end

  def test_new
    get :new
    assert_template 'new'
  end

  def test_create_invalid
    Airport.any_instance.stubs(:valid?).returns(false)
    post :create
    assert_template 'new'
  end

  def test_create_valid
    Airport.any_instance.stubs(:valid?).returns(true)
    post :create
    assert_redirected_to airport_url(assigns(:airport))
  end

  def test_edit
    get :edit, :id => Airport.first
    assert_template 'edit'
  end

  def test_update_invalid
    Airport.any_instance.stubs(:valid?).returns(false)
    put :update, :id => Airport.first
    assert_template 'edit'
  end

  def test_update_valid
    Airport.any_instance.stubs(:valid?).returns(true)
    put :update, :id => Airport.first
    assert_redirected_to airport_url(assigns(:airport))
  end

  def test_destroy
    airport = Airport.first
    delete :destroy, :id => airport
    assert_redirected_to airports_url
    assert !Airport.exists?(airport.id)
  end
end
