import { useCallback, useEffect, useMemo, useState } from 'react';
import { HuntingMapTutorialContextValue } from 'contexts';
import { isMapTutorialCompleted, writeMapTutorialCompleted } from 'lib/storage';
import { useStorage } from './useStorage';

/**
 * Hook exposing map tutorial states and functionality
 */
export const useHuntingMapTutorialManager = () => {
  // Flag indicating whether tutorial has been previously completed
  const [completed, setCompleted] = useState(false);

  // Flag indicating whether tutorial functionality is enabled
  const [enabled, setEnabled] = useState(false);

  // Flag indicating whether tutorial is currently open
  const [visible, setVisible] = useState(false);

  // Browser storage manager
  const storage = useStorage();

  /**
   * Handle closing tutorial halfway through
   */
  const handleTutorialClose = useCallback(() => setVisible(false), []);

  /**
   * Handle completing tutorial
   */
  const handleTutorialComplete = useCallback(() => {
    setCompleted(true);
    setVisible(false);

    if (storage) {
      writeMapTutorialCompleted(storage);
    }
  }, [storage]);

  /**
   * Handle showing tutorial
   */
  const handleTutorialOpen = useCallback(() => {
    // Ignore request if tutorial functionality is disabled
    if (!enabled) {
      return;
    }

    setVisible(true);
  }, [enabled]);

  // Set tutorial completion state
  useEffect(() => {
    // Ensure storage is available before proceeding
    if (!storage) {
      return;
    }

    setCompleted(isMapTutorialCompleted(storage));
  }, [storage]);

  return useMemo<HuntingMapTutorialContextValue>(
    () => ({
      enabled,
      completed,
      visible,
      onTutorialClose: handleTutorialClose,
      onTutorialComplete: handleTutorialComplete,
      onTutorialEnable: setEnabled,
      onTutorialOpen: handleTutorialOpen,
    }),
    [
      completed,
      enabled,
      handleTutorialClose,
      handleTutorialComplete,
      handleTutorialOpen,
      visible,
    ],
  );
};