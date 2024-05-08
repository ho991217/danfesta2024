'use client';

import QrScanner from 'qr-scanner';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MdOutlineChangeCircle } from 'react-icons/md';
import { toast } from 'sonner';

import { Button } from '../common';

export type QRScanResult = QrScanner.ScanResult;

type QrReaderProps = {
  onScan?: (result: QRScanResult) => void;
  paused?: boolean;
};

const QrReader = ({ onScan, paused }: QrReaderProps) => {
  const scanner = useRef<QrScanner>();
  const videoEl = useRef<HTMLVideoElement>(null);
  const qrBoxEl = useRef<HTMLDivElement>(null);
  const [qrOn, setQrOn] = useState<boolean>(true);

  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');

  const onScanSuccess = useCallback(
    (result: QRScanResult) => {
      onScan?.(result);
    },
    [onScan],
  );

  const changeFacingMode = () => {
    const facing = facingMode === 'user' ? 'environment' : 'user';
    setFacingMode(facing);
    scanner.current?.setCamera(facing);
  };

  useEffect(() => {
    const video = videoEl?.current;
    if (video && !scanner.current) {
      scanner.current = new QrScanner(video, onScanSuccess, {
        preferredCamera: facingMode,
        highlightScanRegion: true,
        highlightCodeOutline: true,
        overlay: qrBoxEl?.current || undefined,
        maxScansPerSecond: 1,
      });

      scanner?.current
        ?.start()
        .then(() => setQrOn(true))
        .catch((err) => {
          if (err) setQrOn(false);
        });
    }

    return () => {
      if (!video) {
        scanner?.current?.stop();
        scanner?.current?.destroy();
      }
    };
  }, [onScanSuccess, facingMode]);

  useEffect(() => {
    if (!qrOn) toast('카메라 권한 설정을 확인해주세요.');
  }, [qrOn]);

  useEffect(() => {
    if (paused) {
      scanner?.current?.pause();
    } else {
      scanner?.current?.start();
    }
  }, [paused]);

  return (
    <div className="aspect-square overflow-hidden rounded-2xl relative bg-neutral-100 dark:bg-neutral-900">
      <video ref={videoEl} className="object-cover w-full h-full"></video>
      <Button
        onClick={changeFacingMode}
        className="absolute bottom-4 right-4 text-neutral-200 bg-neutral-800 rounded-full bg-opacity-50 w-auto h-auto p-1"
        animateOnClick
      >
        <MdOutlineChangeCircle size={40} />
      </Button>
    </div>
  );
};

export default QrReader;
