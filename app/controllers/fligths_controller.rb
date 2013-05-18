class FligthsController < ApplicationController
  def index
    @fligths = Fligth.all
  end

  def show
    @fligth = Fligth.find(params[:id])
  end

  def new
    @fligth = Fligth.new
  end

  def create
    @fligth = Fligth.new(params[:fligth])
    if @fligth.save
      redirect_to @fligth, :notice => "Successfully created fligth."
    else
      render :action => 'new'
    end
  end

  def edit
    @fligth = Fligth.find(params[:id])
  end

  def update
    @fligth = Fligth.find(params[:id])
    if @fligth.update_attributes(params[:fligth])
      redirect_to @fligth, :notice  => "Successfully updated fligth."
    else
      render :action => 'edit'
    end
  end

  def destroy
    @fligth = Fligth.find(params[:id])
    @fligth.destroy
    redirect_to fligths_url, :notice => "Successfully destroyed fligth."
  end
end
