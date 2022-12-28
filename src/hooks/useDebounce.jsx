import { useEffect, useState } from 'react';

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 미리 정해진 딜레이 시간이 지난 후 업데이트함
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // timeout 호출 도중에 vale/delay가 변경되어 다시 호출되면 이전 타이머를 제거함
    return () => {
      clearTimeout(handler);
    };

    // value/delay가 변경될 때마다 새로운 타이머를 생성함
  }, [value, delay]);

  return debouncedValue;
};
