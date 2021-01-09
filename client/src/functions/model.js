import axios from "axios";

export const getModels = async () =>
  await axios.get(`${process.env.REACT_APP_API}/models`);

export const getModel = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/model/${slug}`);

export const removeModel = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/model/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const updateModel = async (slug, model, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/model/model-update/${slug}`, model, {
    headers: {
      authtoken,
    },
  });

export const createModel = async (model, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/model`, model, {
    headers: {
      authtoken,
    },
  });
