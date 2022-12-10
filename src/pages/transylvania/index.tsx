import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import NoSSR from 'react-no-ssr';
import { DebugPanel } from 'components/DebugPanel';
import { HuntingMap } from 'components/HuntingMap';
import { baseUrl } from 'config/app';
import { markerVisibilityMap } from 'config/markers';
import {
  useAnimalMarkerData,
  useApplicationSettings,
  useDebugPanel,
} from 'hooks';
import { mapHeight, mapLabels, mapWidth } from './config';
import { animalMarkers } from './markers/animals';
import { genericMarkers } from './markers/generic';

const TransylvaniaPage = () => {
  // Custom animal data manager values
  const { dataMap, onDataClear, onDataRead, onDataWrite } =
    useAnimalMarkerData();

  // Retrieve application settings
  const { settings } = useApplicationSettings();

  // Detect if application is running in debug mode
  const { query } = useRouter();
  const creator = !!query.creator;

  // Extract debug panel controls
  const {
    currentDebugMarker,
    debugMarkers,
    debugMarkersWithCurrent,
    onDebugClear,
    onDebugCoordinates,
    onDebugCopy,
    onDebugDrinkZoneRemove,
    onDebugEatZoneRemove,
    onDebugMarkerDelete,
    onDebugSettingsChange,
    onDebugSleepZoneRemove,
  } = useDebugPanel();

  // Merge current animal markers with debug data
  const markers = useMemo(
    () => animalMarkers.concat(debugMarkersWithCurrent),
    [debugMarkersWithCurrent],
  );

  return (
    <>
      <Head>
        <title>Transylvania - Way Of The Hunter</title>
      </Head>

      <NoSSR>
        <DebugPanel
          currentMarker={currentDebugMarker}
          enabled={creator}
          markers={debugMarkers}
          onClear={onDebugClear}
          onCopy={onDebugCopy}
          onDrinkZoneRemove={onDebugDrinkZoneRemove}
          onEatZoneRemove={onDebugEatZoneRemove}
          onMarkerDelete={onDebugMarkerDelete}
          onSettingsChange={onDebugSettingsChange}
          onSleepZoneRemove={onDebugSleepZoneRemove}
        />

        <HuntingMap
          animalMarkerRecords={dataMap}
          animalMarkers={markers}
          imageHeight={mapHeight}
          imageSrc={`${baseUrl}/img/maps/transylvania.jpeg`}
          imageWidth={mapWidth}
          genericMarkers={genericMarkers}
          labels={mapLabels}
          markerSizeAnimal={settings.animalMarkerSize}
          markerSizeGeneric={settings.genericMarkerSize}
          markerSizeZone={settings.zoneMarkerSize}
          zoomMarkerMap={markerVisibilityMap}
          onClick={onDebugCoordinates}
          onEditorClear={onDataClear}
          onEditorRead={onDataRead}
          onEditorWrite={onDataWrite}
        />
      </NoSSR>
    </>
  );
};

export default TransylvaniaPage;
