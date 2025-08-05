import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { timelineItems } from "@/data/portfolioData";

export function Timeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const getTimelineColor = (index: number) => {
    const colors = ["primary", "secondary", "amber-500", "green-500"];
    return colors[index % colors.length];
  };

  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-1 timeline-line" />

      <motion.div 
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {timelineItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative pl-16"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className={`absolute left-6 w-4 h-4 bg-${getTimelineColor(index)} rounded-full border-4 border-background`}
              whileHover={{ scale: 1.3 }}
            />
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className={`text-2xl font-bold text-${getTimelineColor(index)} mb-2`}>
                  {item.semester} {item.year}
                  {item.special && (
                    <span className="block text-lg font-medium text-muted-foreground">
                      ({item.special})
                    </span>
                  )}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {item.courses.map((course, courseIndex) => (
                    <motion.li
                      key={courseIndex}
                      className="flex items-start space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      data-testid={`course-${item.id}-${courseIndex}`}
                    >
                      <i className={`${course.icon} mt-1 text-${getTimelineColor(index)}`} />
                      <span>
                        {course.code && <strong>{course.code}:</strong>} {course.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
