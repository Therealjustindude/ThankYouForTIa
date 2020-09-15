class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id
  has_many :menu_selections
end
