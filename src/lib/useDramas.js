import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import API_URL from "./../api_url";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function useDramas() {
  const { token } = useAuth();

  const { data, mutate } = useSWR(`${API_URL}/dramas`, fetcher);

  useEffect(() => {
    console.log("data using swr", data);
  }, [data]);

  const deleteData = async (id) => {
    await fetch(`${API_URL}/dramas/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
    mutate()
  };

  const postData = async (body) => {
    console.log(token);
    await fetch(`${API_URL}/dramas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
    mutate()
  };

  return {
    data: data?.data,
    loading: !data,
    deleteData,
    postData,
  };
}
