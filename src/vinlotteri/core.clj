(ns vinlotteri.core
  (:require [compojure.core :refer :all]
            [clojure.data.json :as json]
            [clojure.string :as cstr]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.util.response :as resp]))


(defroutes app
           (GET "/" []
                (resp/content-type (resp/resource-response "index.html" {:root "public"}) "text/html"))
           (route/resources "/")
           (route/not-found "<h1>Page not found</h1>"))