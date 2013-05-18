require 'test_helper'

class FligthsControllerTest < ActionController::TestCase
  def test_index
    get :index
    assert_template 'index'
  end

  def test_show
    get :show, :id => Fligth.first
    assert_template 'show'
  end

  def test_new
    get :new
    assert_template 'new'
  end

  def test_create_invalid
    Fligth.any_instance.stubs(:valid?).returns(false)
    post :create
    assert_template 'new'
  end

  def test_create_valid
    Fligth.any_instance.stubs(:valid?).returns(true)
    post :create
    assert_redirected_to fligth_url(assigns(:fligth))
  end

  def test_edit
    get :edit, :id => Fligth.first
    assert_template 'edit'
  end

  def test_update_invalid
    Fligth.any_instance.stubs(:valid?).returns(false)
    put :update, :id => Fligth.first
    assert_template 'edit'
  end

  def test_update_valid
    Fligth.any_instance.stubs(:valid?).returns(true)
    put :update, :id => Fligth.first
    assert_redirected_to fligth_url(assigns(:fligth))
  end

  def test_destroy
    fligth = Fligth.first
    delete :destroy, :id => fligth
    assert_redirected_to fligths_url
    assert !Fligth.exists?(fligth.id)
  end
end
