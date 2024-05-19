import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

export function MapPage() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyB42LowETpZQmueEbCc2sASQz7KhrqB2rQ"
    })

    const center = {
        lat: -22.887812963326418,
        lng: -43.57007152598223
    }
    return (
        <div className='w-full h-full'>
            {
                isLoaded ? (
                    <GoogleMap mapContainerStyle={{ width: '100%', height: '100%' }} center={center} zoom={18}>
                        <Marker position={center} />
                    </GoogleMap>
                ) : <></>
            }
        </div>
    )
}
