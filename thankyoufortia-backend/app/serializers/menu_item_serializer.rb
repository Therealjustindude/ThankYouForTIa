class MenuItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :ingredients, :category, :price, :image
  has_many :menu_selections
end
