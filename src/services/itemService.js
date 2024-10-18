import Item from '../models/Item.js';

export const itemService = {
  getAllItems: async () => {
    return await Item.find();
  },

  addItem: async (pokemonData) => {
    try {
      const newItem = new Item({
        name: pokemonData.name,
        image: pokemonData.image,
        price: pokemonData.price,
        // Añade aquí cualquier otro campo que necesites
      });
      
      return await newItem.save();
    } catch (error) {
      throw new Error('Error saving item to database');
    }
  },

  markAsPurchased: async (id) => {
    return await Item.findByIdAndUpdate(id, { purchased: true }, { new: true });
  },

  deleteItem: async (id) => {
    return await Item.findByIdAndDelete(id);
  }
};