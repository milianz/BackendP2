import { itemService } from '../services/itemService.js';

export const getAllItems = async (req, res) => {
  try {
    const items = await itemService.getAllItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'No se pudieron obtener datos' });
  }
};

export const addItem = async (req, res) => {
  try {
    const pokemonData = req.body; 
    const newItem = await itemService.addItem(pokemonData);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const markAsPurchased = async (req, res) => {
  try {
    const updatedItem = await itemService.markAsPurchased(req.params.id);
    if (updatedItem) {
      res.json(updatedItem);
    } else {
      res.status(404).json({ message: 'Item no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error actualizando el item' });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const deletedItem = await itemService.deleteItem(req.params.id);
    if (deletedItem) {
      res.json(deletedItem);
    } else {
      res.status(404).json({ message: 'Item no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error borrando el item item' });
  }
};