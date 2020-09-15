class MenuSelectionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :order_id
  has_many :menu_items
end
