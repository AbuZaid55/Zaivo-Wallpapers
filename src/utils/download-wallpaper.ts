import * as MediaLibrary from 'expo-media-library/legacy';
import * as Haptics from 'expo-haptics';
import { File, Paths } from 'expo-file-system';

type DownloadWallpaperProps = {
  url: string;
  name: string;
  onStart?: () => void;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
};

const downloadWallpaper = async ({
  url,
  name,
  onStart,
  onSuccess,
  onError,
}: DownloadWallpaperProps) => {
  try {
    onStart?.();

    const permission =
      await MediaLibrary.requestPermissionsAsync(
        true,
        ['photo']
      );

    if (!permission.granted) {
      throw new Error('Permission denied');
    }

    const file = new File(
      Paths.cache,
      `${Date.now()}-${name}-Zaivo-Wallpapers.jpg`
    );

    await File.downloadFileAsync(url, file);

    await MediaLibrary.saveToLibraryAsync(file.uri);

    await Haptics.notificationAsync(
      Haptics.NotificationFeedbackType.Success
    );

    onSuccess?.();
  } catch (error) {
    await Haptics.notificationAsync(
      Haptics.NotificationFeedbackType.Error
    );

    onError?.(error as Error);
  }
};

export default downloadWallpaper;