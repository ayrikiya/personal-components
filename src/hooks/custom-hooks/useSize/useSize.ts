/*
 * @Author: 王荣
 * @Date: 2022-03-31 22:40:41
 * @LastEditors: 王荣
 * @LastEditTime: 2022-03-31 22:40:42
 * @Description: 填写简介
 */

import ResizeObserver from "resize-observer-polyfill";
import useRafState from "../useRafState";
import type { BasicTarget } from "../utils/domTarget";
import { getTargetElement } from "../utils/domTarget";
import useIsomorphicLayoutEffectWithTarget from "../utils/useIsomorphicLayoutEffectWithTarget";

type Size = { width: number; height: number };

function useSize(target: BasicTarget): Size | undefined {
  const [state, setState] = useRafState<Size>();

  useIsomorphicLayoutEffectWithTarget(
    () => {
      const el = getTargetElement(target);

      if (!el) {
        return;
      }

      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const { clientWidth, clientHeight } = entry.target;
          setState({
            width: clientWidth,
            height: clientHeight,
          });
        });
      });

      resizeObserver.observe(el);
      return () => {
        resizeObserver.disconnect();
      };
    },
    [],
    target
  );

  return state;
}

export default useSize;
