module AdminHelper

  def example(options={}, &block)
    out = render :partial => 'menu/header', :locals => {:options => options}
    out << capture(&block)
    out << (render :partial => 'menu/footer', :locals => {:options => options})
    out
  end

end
