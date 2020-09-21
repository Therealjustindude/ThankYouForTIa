class MenuItemsController < ApplicationController
  before_action :set_menu_item, only: [:show, :update, :destroy]

  # GET /menu_items
  def index
    @menu_items = MenuItem.all

    render json: @menu_items
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_menu_item
      @menu_item = MenuItem.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def menu_item_params
      params.require(:menu_item).permit(:title, :ingredients, :category, :price, :image)
    end
end
