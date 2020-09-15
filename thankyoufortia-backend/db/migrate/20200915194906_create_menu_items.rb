class CreateMenuItems < ActiveRecord::Migration[6.0]
  def change
    create_table :menu_items do |t|
      t.string :title
      t.string :ingredients
      t.string :category

      t.timestamps
    end
  end
end
