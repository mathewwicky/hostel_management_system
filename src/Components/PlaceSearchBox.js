import React, { useEffect } from 'react';

function PlacesSearchBox() {

    let map; // Declare map variable

  // Function to handle button click
  function handleButtonClick() {
    const coordinates = { lat: 0.3309, lng: 32.5738 }; // Replace with desired coordinates
    map.setCenter(coordinates);
  }


  useEffect(() => {
    // Function to initialize the map and search box
    function initAutocomplete() {
      // Initialise the map
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 1.3733, lng: 32.2903 },
        zoom: 13,
        mapTypeId: "roadmap",
      });

      // Create a search box
      const input = document.getElementById("pac-input");
      const searchBox = new window.google.maps.places.SearchBox(input);

      map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);

      map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
      });

      // Add markers to map
      let markers = [];

      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length === 0) {
          return;
        }

        markers.forEach((marker) => {
          marker.setMap(null);
        });
        markers = [];

        const bounds = new window.google.maps.LatLngBounds();

        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            console.log("Returned place contains no geometry");
            return;
          }

          const icon = {
            url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
            size: new window.google.maps.Size(71, 71),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(17, 34),
            scaledSize: new window.google.maps.Size(25, 25),
          };

          markers.push(
            new window.google.maps.Marker({
              map,
              icon,
              title: place.name,
              position: place.geometry.location,
            })
          );

          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });

        map.fitBounds(bounds);
      });

      // Use geolocation to get current position
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const currentPosition = new window.google.maps.LatLng(latitude, longitude);

            new window.google.maps.Marker({
              position: currentPosition,
              map,
              title: "My Location",
            });

            // Center the map on the current position
            map.setCenter(currentPosition);
          },
          (error) => {
            console.error("Error getting current location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    }

    if (window.google) {
      // If the Google Maps API has already loaded (e.g., from a previous script), call initAutocomplete immediately
      initAutocomplete();
    } else {
      // If the Google Maps API is not loaded yet, load it asynchronously and then call initAutocomplete
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyArib-Vz2YYlTURfx-KJQapEEhrf4wv95A&callback=initAutocomplete&libraries=places&v=weekly`;
      script.defer = true;
      document.head.appendChild(script);
    }
   
  }, []);

  return (
    <div>
      <input
        id="pac-input"
        className="controls"
        type="text"
        placeholder="Search Box"
      />
      <button onClick={handleButtonClick}>Go to Olympia Hostel</button>
      <div id="map" style={{ height: "500px" }}></div>
    </div>
    
  );
}

export default PlacesSearchBox;



// import React, { useEffect, useRef, useState } from 'react';

// function PlacesSearchBox() {
//   const mapRef = useRef(null);
//   const [map, setMap] = useState(null);

//   function initAutocomplete() {
//     if (!mapRef.current) return;

//     const newMap = new window.google.maps.Map(mapRef.current, {
//       center: { lat: 1.3733, lng: 32.2903 },
//       zoom: 13,
//       mapTypeId: "roadmap",
//     });

//     setMap(newMap);

//     const input = document.getElementById("pac-input");
//     const searchBox = new window.google.maps.places.SearchBox(input);

//     newMap.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);

//     newMap.addListener("bounds_changed", () => {
//       searchBox.setBounds(newMap.getBounds());
//     });

//     let markers = [];

//     searchBox.addListener("places_changed", () => {
//       const places = searchBox.getPlaces();

//       if (places.length === 0) {
//         return;
//       }

//       markers.forEach((marker) => {
//         marker.setMap(null);
//       });
//       markers = [];

//       const bounds = new window.google.maps.LatLngBounds();

//       places.forEach((place) => {
//         if (!place.geometry || !place.geometry.location) {
//           console.log("Returned place contains no geometry");
//           return;
//         }

//         const icon = {
//           url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
//           size: new window.google.maps.Size(71, 71),
//           origin: new window.google.maps.Point(0, 0),
//           anchor: new window.google.maps.Point(17, 34),
//           scaledSize: new window.google.maps.Size(25, 25),
//         };

//         markers.push(
//           new window.google.maps.Marker({
//             map: newMap,
//             icon,
//             title: place.name,
//             position: place.geometry.location,
//           })
//         );

//         if (place.geometry.viewport) {
//           bounds.union(place.geometry.viewport);
//         } else {
//           bounds.extend(place.geometry.location);
//         }
//       });

//       newMap.fitBounds(bounds);
//     });
//   }

//   function handleButtonClick() {
//     if (map) {
//       const coordinates = { lat: 0.3309, lng: 32.5738 }; // Replace with desired coordinates
//       map.setCenter(coordinates);
//     }
//   }

//   useEffect(() => {
//     if (window.google) {
//       initAutocomplete();

//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             const currentPosition = new window.google.maps.LatLng(latitude, longitude);

//             new window.google.maps.Marker({
//               position: currentPosition,
//               map: map,
//               title: "My Location",
//             });

//             map.setCenter(currentPosition);
//           },
//           (error) => {
//             console.error("Error getting current location:", error);
//           }
//         );
//       } else {
//         console.error("Geolocation is not supported by this browser.");
//       }
//     } else {
//       console.error("Google Maps API is not loaded yet.");
//     }
//   }, [map]);

//   return (
//     <div>
//       <input
//         id="pac-input"
//         className="controls"
//         type="text"
//         placeholder="Search Box"
//       />
//       <button onClick={handleButtonClick}>Go to Olympia Hostel</button>
//       <div ref={mapRef} style={{ height: "500px" }}></div>
//     </div>
//   );
// }

// export default PlacesSearchBox;
