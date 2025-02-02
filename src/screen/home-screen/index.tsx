import { Screen } from 'component';
import React, { useMemo } from 'react';
import { InsightItem, insights } from 'constant';
import { PersonalInsightCard } from './component';

/**
 * The HomeScreen component renders a list of insights, divided into strength areas and growth areas.
 */
export const HomeScreen = () => {
  /**
   * Categorizes insights into strength areas and growth areas based on progress.
   * Insights with a progress greater than or equal to 85% are categorized as strength areas.
   * Insights with a progress less than to 85% are categorized as growth areas.
   */
  const { strengthAreas, growthAreas } = useMemo(() => {
    return insights.reduce(
      (acc, insight) => {
        if (insight.progress >= 85) {
          acc.strengthAreas.push(insight);
        } else {
          acc.growthAreas.push(insight);
        }
        return acc;
      },
      { strengthAreas: [] as InsightItem[], growthAreas: [] as InsightItem[] },
    );
  }, []);

  return (
    <Screen safeAreaEdges={['top']} preset="scroll">
      {/* PersonalInsightCard for strength areas */}
      <PersonalInsightCard
        insights={strengthAreas}
        headingTx="home.strengthAreas"
      />

      {/* PersonalInsightCard for growth areas */}
      <PersonalInsightCard
        insights={growthAreas}
        headingTx="home.growthAreas"
      />
    </Screen>
  );
};
