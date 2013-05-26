require 'test_helper'

class TravelersControllerTest < ActionController::TestCase
  def test_index
    get :index
    assert_template 'index'
  end

  def test_show
    get :show, :id => Traveler.first
    assert_template 'show'
  end

  def test_new
    get :new
    assert_template 'new'
  end

  def test_create_invalid
    Traveler.any_instance.stubs(:valid?).returns(false)
    post :create
    assert_template 'new'
  end

  def test_create_valid
    Traveler.any_instance.stubs(:valid?).returns(true)
    post :create
    assert_redirected_to traveler_url(assigns(:traveler))
  end

  def test_edit
    get :edit, :id => Traveler.first
    assert_template 'edit'
  end

  def test_update_invalid
    Traveler.any_instance.stubs(:valid?).returns(false)
    put :update, :id => Traveler.first
    assert_template 'edit'
  end

  def test_update_valid
    Traveler.any_instance.stubs(:valid?).returns(true)
    put :update, :id => Traveler.first
    assert_redirected_to traveler_url(assigns(:traveler))
  end

  def test_destroy
    traveler = Traveler.first
    delete :destroy, :id => traveler
    assert_redirected_to travelers_url
    assert !Traveler.exists?(traveler.id)
  end
end
