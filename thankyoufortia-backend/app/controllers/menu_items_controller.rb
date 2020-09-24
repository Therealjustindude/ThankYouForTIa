class MenuItemsController < ApplicationController
  before_action :set_menu_item, only: [:show, :update, :destroy]
  def index
    @menu_items = MenuItem.all

    render json: @menu_items
  end

  private

    def set_menu_item
      @menu_item = MenuItem.find(params[:id])
    end
    
    def menu_item_params
      params.require(:menu_item).permit(:title, :ingredients, :category, :price, :image)
    end
end
